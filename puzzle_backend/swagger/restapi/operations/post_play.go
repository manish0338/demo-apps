// Code generated by go-swagger; DO NOT EDIT.

package operations

// This file was generated by the swagger tool.
// Editing this file might prove futile when you re-run the generate command

import (
	"net/http"

	errors "github.com/go-openapi/errors"
	middleware "github.com/go-openapi/runtime/middleware"
	strfmt "github.com/go-openapi/strfmt"
	swag "github.com/go-openapi/swag"
	validate "github.com/go-openapi/validate"
)

// PostPlayHandlerFunc turns a function with the right signature into a post play handler
type PostPlayHandlerFunc func(PostPlayParams) middleware.Responder

// Handle executing the request and returning a response
func (fn PostPlayHandlerFunc) Handle(params PostPlayParams) middleware.Responder {
	return fn(params)
}

// PostPlayHandler interface for that can handle valid post play params
type PostPlayHandler interface {
	Handle(PostPlayParams) middleware.Responder
}

// NewPostPlay creates a new http.Handler for the post play operation
func NewPostPlay(ctx *middleware.Context, handler PostPlayHandler) *PostPlay {
	return &PostPlay{Context: ctx, Handler: handler}
}

/*PostPlay swagger:route POST /play postPlay

FE calls this to start a new game.

*/
type PostPlay struct {
	Context *middleware.Context
	Handler PostPlayHandler
}

func (o *PostPlay) ServeHTTP(rw http.ResponseWriter, r *http.Request) {
	route, rCtx, _ := o.Context.RouteInfo(r)
	if rCtx != nil {
		r = rCtx
	}
	var Params = NewPostPlayParams()

	if err := o.Context.BindValidRequest(r, route, &Params); err != nil { // bind params
		o.Context.Respond(rw, r, route.Produces, route, err)
		return
	}

	res := o.Handler.Handle(Params) // actually handle the request

	o.Context.Respond(rw, r, route.Produces, route, res)

}

// PostPlayForbiddenBody post play forbidden body
// swagger:model PostPlayForbiddenBody
type PostPlayForbiddenBody struct {

	// An error message that can be displayed to the user.
	DisplayMessage string `json:"displayMessage,omitempty"`

	// An error code; one of:
	//
	// - `insufficientFund` – The account had not enough fund to
	//   cover the deposit.
	//
	// Required: true
	ErrorCode *string `json:"errorCode"`
}

// Validate validates this post play forbidden body
func (o *PostPlayForbiddenBody) Validate(formats strfmt.Registry) error {
	var res []error

	if err := o.validateErrorCode(formats); err != nil {
		res = append(res, err)
	}

	if len(res) > 0 {
		return errors.CompositeValidationError(res...)
	}
	return nil
}

func (o *PostPlayForbiddenBody) validateErrorCode(formats strfmt.Registry) error {

	if err := validate.Required("postPlayForbidden"+"."+"errorCode", "body", o.ErrorCode); err != nil {
		return err
	}

	return nil
}

// MarshalBinary interface implementation
func (o *PostPlayForbiddenBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *PostPlayForbiddenBody) UnmarshalBinary(b []byte) error {
	var res PostPlayForbiddenBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}

// PostPlayGatewayTimeoutBody post play gateway timeout body
// swagger:model PostPlayGatewayTimeoutBody
type PostPlayGatewayTimeoutBody struct {

	// msg
	Msg string `json:"msg,omitempty"`
}

// Validate validates this post play gateway timeout body
func (o *PostPlayGatewayTimeoutBody) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *PostPlayGatewayTimeoutBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *PostPlayGatewayTimeoutBody) UnmarshalBinary(b []byte) error {
	var res PostPlayGatewayTimeoutBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}

// PostPlayServiceUnavailableBody post play service unavailable body
// swagger:model PostPlayServiceUnavailableBody
type PostPlayServiceUnavailableBody struct {

	// msg
	Msg string `json:"msg,omitempty"`
}

// Validate validates this post play service unavailable body
func (o *PostPlayServiceUnavailableBody) Validate(formats strfmt.Registry) error {
	return nil
}

// MarshalBinary interface implementation
func (o *PostPlayServiceUnavailableBody) MarshalBinary() ([]byte, error) {
	if o == nil {
		return nil, nil
	}
	return swag.WriteJSON(o)
}

// UnmarshalBinary interface implementation
func (o *PostPlayServiceUnavailableBody) UnmarshalBinary(b []byte) error {
	var res PostPlayServiceUnavailableBody
	if err := swag.ReadJSON(b, &res); err != nil {
		return err
	}
	*o = res
	return nil
}
