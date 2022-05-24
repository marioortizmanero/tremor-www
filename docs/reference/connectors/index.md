# Connectors

This section introduces Tremor connectors.

## Overview

In Tremor, a `connector` is how external event streams are integrated with tremor.
Connectors can be clients ( such as TCP or UDP clients ), servers ( such as an embedded HTTP or gRPC
server ), or services such as the `kv` and `wal` connectors or an abstraction over an API such as the
`discord` connector.

### Formats and Types

Internally, tremor represents data as a set of heirarchic values with support for the
primitive types `null`, `integer`, `binary`, `boolean`, `floating point` and `string` and the
structural types of `array` and `record`. The syntax is backwards compatible with JSON
but not symmetric.

A tremor value can include raw binary data but JSON cannot.

Connectors translate external data formats, over external protocols to tremor internals.
Formats are transformed to the tremor value type system. And protocol, transport and API
interactions are translated to streams of event commands, event data and query streams.

Tremor supports a suite of `codecs` for common format transformations to and from external
data formats such as for `json`, `yaml` or `csv`. Further, tremor can preprocess data before
it is transformed. So gzip compressed data can be decompressed before a codec is used to
convert the external data to a tremor value. If data is line delimited, the events can be
processed line by line.

We call transformation from an external data format to the tremor value type `preprocessing`.

We call transformation from the tremor value system to an external data format `postprocessing`.

Codecs and processors can be blended together with connectors to compose a working solution.

So, a TCP connector, with a line by line processor can produce and consume line delimited
batch events. The source might be `json` and the target ( also ) tcp could be `yaml` or `csv`.

This allows for a relatively small set of `connectors`, `codecs` and `processors` to be
very widely applicable in production.

### Codecs

Codecs convert data from external data formats to the native tremor value type system
and vice versa.

Check the [codec guide](../codecs) to see the supported codecs.

### Preprocessors

Preprocessor chains transform inbound chunks of streaming data before a configured
codec in a connector converts them to the native Tremor value type representation.

Check the [preprocessor guide](../preprocessors) to see the supported codecs.

### Postprocessors

Postprocessor chains transform outbound chunks of streaming data after a codec
converts them from native Tremor value type representation to the external form
indicated by the configured codec of a connector.

Check the [postprocessor guide](../postprocessors) to see the supported codecs.

### Quality of Service

Add content here


## Connector Types


Connectors can be grouped in a number of categories that rouglhy provide the same pattern with different implementations.

### Client & Server

This are connectors that handle the kind of connections that usually are used for implementing, as the category suggests, clients and servers. [TCP](tcp), [HTTP](http), but also [WebSockets](ws) or [UNIX Sockets](unix_socket) fall into this categort.

They all provide matching pairs of `_client` and `_server` implementations where the `_client` is the side that initiates a contact, while the `_server` is the side that awaits to be contacted.

### Reader & Writer

This set of connectors deals with connections that rougly resamble files access. [File](file) is the obvious one, but others like [AWS S3](s3) follow this model.

They generally have a `reader` and a `writer` side.

### Consumer & Producer

This set of connectos connects to different messaging systems where there are two unidirecional connectiosn. One to `produce` new messages, and one to `consume` new messages.

The most prominent example here is [Kafka Producer/Consumer](kafka).

They generally have a `_producer` and `_consumer` implementaiton.

### Unique

Some connectors don't fall into the above categories or are one sided. The [Discord](discord) or [DNS](dns) connector is a client but there is no server. The [KV](kv) or [Google Big Query](gbq) connector is a database connector, and connectors like the [WAL](wal) are different again.

## Development Only Connectors

These connectors are generally intended for contributors to tremor and are
available only during development for debug builds of tremor.

| Connector Name | Description |
|----------------|-------------|
| [cb](cb)       | Explain     |
| [bench](bench) | Explain     |
| [null](null)   | Explain     |
| [exit](exit)   | Allow terminating the runtime |

## Configuration

Connectors are configured via the deployment syntax in a tremor `.troy` file.

TBD

## Examples

### Writing to a local file on the file system

To write received events in tremor to the local file system we can use
the builtin `file` connector, and configure the target file as the `file`
argument to the connector.

We can override default connector provided internal processing via reparameterizing
the default arguments specified in the connectors implementation. For example, where
we are writing JSON formatted data to a file, we may desire that fields in record
structures are always in a consistent and normalized serialization order through
replacing the default `json` codec with the `json-sorted` codec.

We may also wish to override the conditions under which a file is created, appended
to or overwritten when tremor is started. We can modify the write mode by setting the
`mode` accordingly.

```tremor
define connector write_file from file
args
    file = "out.log"
with
    codec = "json-sorted",	# Normalize record fields in serialized JSON by switching to the `json-sorted` codec
    config = {
        "path": args.file,	# Use the file argument from the arguments specification for the target file path
        "mode": "truncate"	# Truncate the file, or create a new file when the connector starts
    },
    postprocessors = ["lines"]  # Ensure entire JSON documents are one per line ( UNIX-style ) in the serialized file
end;

##