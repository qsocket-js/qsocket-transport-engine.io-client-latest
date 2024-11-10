import {
	Socket,
	SocketOptions,
	SocketWithoutUpgrade,
	SocketWithUpgrade,
	Transport,
	TransportError,
	transports,
	installTimerFunctions,
	parse,
	nextTick,
	Fetch,
	NodeXHR,
	XHR,
	NodeWebSocket,
	WebSocket,
	WebTransport,
	protocol,
} from 'engine.io-client-latest';

/**
 * Creates a new Engine.IO client socket instance.
 *
 * @param uri - Optional URI string to connect to.
 * @param opts - Optional configuration options for the socket.
 * @returns A new `Socket` instance connected to the specified URI.
 */
function engine(uri?: string, opts?: SocketOptions): Socket;

/**
 * Creates a new Engine.IO client socket instance with specified options.
 *
 * @param opts - Configuration options for the socket.
 * @returns A new `Socket` instance using the provided options.
 */
function engine(opts: SocketOptions): Socket;

/**
 * Implementation of the `engine` function, creating a `Socket` instance based on provided arguments.
 *
 * @param arg1 - Either a URI string or options for the socket.
 * @param arg2 - Optional configuration options if `arg1` is a URI string.
 * @returns A new `Socket` instance.
 */
function engine(arg1?: unknown, arg2?: unknown): Socket {
	if (typeof arg1 === 'string') {
		return new Socket(arg1, arg2 as SocketOptions);
	} else {
		return new Socket(arg1 as SocketOptions);
	}
}

export default engine;

/**
 * `QSocketTransportEIOClientLatestSocket` represents a client socket connection instance created by Engine.IO,
 * facilitating low-latency, real-time communication with an Engine.IO server.
 *
 * @type {Socket}
 */
export const QSocketTransportEIOClientLatestSocket: typeof Socket = Socket;

/**
 * `IQSocketTransportEIOClientLatestSocket` is a type alias for the `Socket` class from `engine.io-client-latest`.
 * This type represents an individual client connection to the Engine.IO server.
 */
export type IQSocketTransportEIOClientLatestSocket = Socket;

/**
 * `IQSocketTransportEIOClientLatestSocketOptions` represents options for configuring the Engine.IO client socket,
 * allowing customization of connection and data transfer settings.
 */
export type IQSocketTransportEIOClientLatestSocketOptions = SocketOptions;

/**
 * `IQSocketTransportEIOClientLatestSocketWithoutUpgrade` is a type alias for `SocketWithoutUpgrade`,
 * representing a client socket configured to not upgrade its transport mechanism, remaining on the initial protocol (e.g., polling).
 */
export type IQSocketTransportEIOClientLatestSocketWithoutUpgrade = SocketWithoutUpgrade;

/**
 * `IQSocketTransportEIOClientLatestSocketWithUpgrade` is a type alias for `SocketWithUpgrade`,
 * representing a client socket that supports upgrading to a different transport protocol, such as WebSocket.
 */
export type IQSocketTransportEIOClientLatestSocketWithUpgrade = SocketWithUpgrade;

/**
 * `IQSocketTransportEIOClientLatestTransport` represents the transport mechanisms available for the Engine.IO client,
 * including options like polling and WebSocket for flexible, real-time communication.
 */
export type IQSocketTransportEIOClientLatestTransport = Transport;

/**
 * `IQSocketTransportEIOClientLatestTransportError` defines errors that can arise in the transport layer
 * of the Engine.IO client, often due to connectivity or protocol issues.
 */
export type IQSocketTransportEIOClientLatestTransportError = TransportError;

/**
 * `QSocketTransportEIOClientLatestTransports` provides a set of available transport options (e.g., polling, WebSocket)
 * used by the Engine.IO client to handle real-time communication with the server.
 */
export const QSocketTransportEIOClientLatestTransports = transports;

/**
 * `QSocketTransportEIOClientLatestInstallTimerFunctions` is a utility for setting custom timer functions
 * (e.g., `setTimeout`, `clearTimeout`), often used in non-standard or limited environments.
 */
export const QSocketTransportEIOClientLatestInstallTimerFunctions = installTimerFunctions;

/**
 * `QSocketTransportEIOClientLatestParse` is a URI parsing utility for Engine.IO connections,
 * extracting details such as protocol, hostname, and port from a URI.
 */
export const QSocketTransportEIOClientLatestParse = parse;

/**
 * `QSocketTransportEIOClientLatestNextTick` schedules a callback to run on the next event loop tick,
 * similar to `process.nextTick` in Node.js, useful for managing asynchronous operations.
 */
export const QSocketTransportEIOClientLatestNextTick = nextTick;

/**
 * `QSocketTransportEIOClientLatestFetch` uses the Fetch API as a polling transport,
 * enabling efficient data transmission in modern, browser-based environments.
 */
export const QSocketTransportEIOClientLatestFetch = Fetch;

/**
 * `QSocketTransportEIOClientLatestNodeXHR` represents the XHR transport tailored for Node.js environments,
 * using XHR for data transmission in polling mode.
 */
export const QSocketTransportEIOClientLatestNodeXHR = NodeXHR;

/**
 * `QSocketTransportEIOClientLatestXHR` is the XHR transport for browser environments, utilizing XHR for data polling.
 */
export const QSocketTransportEIOClientLatestXHR = XHR;

/**
 * `QSocketTransportEIOClientLatestNodeWebSocket` is the WebSocket transport specifically for Node.js environments,
 * allowing for persistent, real-time communication over WebSocket.
 */
export const QSocketTransportEIOClientLatestNodeWebSocket = NodeWebSocket;

/**
 * `QSocketTransportEIOClientLatestWebSocket` is the WebSocket transport for browser environments,
 * supporting real-time communication through the WebSocket protocol.
 */
export const QSocketTransportEIOClientLatestWebSocket = WebSocket;

/**
 * `QSocketTransportEIOClientLatestWebTransport` is an experimental protocol for real-time communication,
 * used in environments that support WebTransport.
 */
export const QSocketTransportEIOClientLatestWebTransport = WebTransport;

/**
 * `QSocketTransportEIOClientLatestProtocol` is the protocol version number for `engine.io-client-latest`,
 * ensuring compatibility between client and server instances.
 */
export const QSocketTransportEIOClientLatestProtocol = protocol;
