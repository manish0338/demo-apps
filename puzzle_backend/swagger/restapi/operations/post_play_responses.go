// Code generated by go-swagger; DO NOT EDIT.

package operations

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the swagger generate command

import (
	"net/http"

	"github.com/go-openapi/runtime"
)

// PostPlayCreatedCode is the HTTP code returned for type PostPlayCreated
const PostPlayCreatedCode int = 201

/*PostPlayCreated A new game has been started.

swagger:response postPlayCreated
*/
type PostPlayCreated struct {

	/*
	  In: Body
	*/
	Payload *PostPlayCreatedBody `json:"body,omitempty"`
}

// NewPostPlayCreated creates PostPlayCreated with default headers values
func NewPostPlayCreated() *PostPlayCreated {

	return &PostPlayCreated{}
}

// WithPayload adds the payload to the post play created response
func (o *PostPlayCreated) WithPayload(payload *PostPlayCreatedBody) *PostPlayCreated {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the post play created response
func (o *PostPlayCreated) SetPayload(payload *PostPlayCreatedBody) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *PostPlayCreated) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(201)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

// PostPlayServiceUnavailableCode is the HTTP code returned for type PostPlayServiceUnavailable
const PostPlayServiceUnavailableCode int = 503

/*PostPlayServiceUnavailable Firebase DB error.

swagger:response postPlayServiceUnavailable
*/
type PostPlayServiceUnavailable struct {

	/*
	  In: Body
	*/
	Payload *PostPlayServiceUnavailableBody `json:"body,omitempty"`
}

// NewPostPlayServiceUnavailable creates PostPlayServiceUnavailable with default headers values
func NewPostPlayServiceUnavailable() *PostPlayServiceUnavailable {

	return &PostPlayServiceUnavailable{}
}

// WithPayload adds the payload to the post play service unavailable response
func (o *PostPlayServiceUnavailable) WithPayload(payload *PostPlayServiceUnavailableBody) *PostPlayServiceUnavailable {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the post play service unavailable response
func (o *PostPlayServiceUnavailable) SetPayload(payload *PostPlayServiceUnavailableBody) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *PostPlayServiceUnavailable) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(503)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}

// PostPlayGatewayTimeoutCode is the HTTP code returned for type PostPlayGatewayTimeout
const PostPlayGatewayTimeoutCode int = 504

/*PostPlayGatewayTimeout Blockchain RPC call failed.

swagger:response postPlayGatewayTimeout
*/
type PostPlayGatewayTimeout struct {

	/*
	  In: Body
	*/
	Payload *PostPlayGatewayTimeoutBody `json:"body,omitempty"`
}

// NewPostPlayGatewayTimeout creates PostPlayGatewayTimeout with default headers values
func NewPostPlayGatewayTimeout() *PostPlayGatewayTimeout {

	return &PostPlayGatewayTimeout{}
}

// WithPayload adds the payload to the post play gateway timeout response
func (o *PostPlayGatewayTimeout) WithPayload(payload *PostPlayGatewayTimeoutBody) *PostPlayGatewayTimeout {
	o.Payload = payload
	return o
}

// SetPayload sets the payload to the post play gateway timeout response
func (o *PostPlayGatewayTimeout) SetPayload(payload *PostPlayGatewayTimeoutBody) {
	o.Payload = payload
}

// WriteResponse to the client
func (o *PostPlayGatewayTimeout) WriteResponse(rw http.ResponseWriter, producer runtime.Producer) {

	rw.WriteHeader(504)
	if o.Payload != nil {
		payload := o.Payload
		if err := producer.Produce(rw, payload); err != nil {
			panic(err) // let the recovery middleware deal with this
		}
	}
}
