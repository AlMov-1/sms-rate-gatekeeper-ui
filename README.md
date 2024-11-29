# SmsRateGatekeeperUi

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 18.2.3.

## Description

This is an example demo project.

This is a Angular UI for the SMSRateGatekeeper service located here:
https://github.com/AlMov-1/SMSRateGatekeeper

This UI will receive real time notifications, containing information about 
attempts to send the message to the actual SMS provider through the gateway, made to gateway by other applications.

It has a filter feature to filter by phone number on behalf of which other application was made an attemot to send its message.
It has a button to remove listed notifications from the table.

## Demo Video
Checkout the files and watch videos locally on your system.

[![filtering and cleaning](https://github.com/AlMov-1/sms-rate-gatekeeper-ui/blob/master/assets/videos/SmsRateGatekeeperUi%20-%20filtering%20and%20cleaning.mp4)](https://github.com/AlMov-1/sms-rate-gatekeeper-ui/blob/master/assets/videos/SmsRateGatekeeperUi%20-%20filtering%20and%20cleaning.mp4)

[![threshold is reached](https://github.com/AlMov-1/sms-rate-gatekeeper-ui/blob/master/assets/videos/SmsRateGatekeeperUi%20-%20threshold%20is%20reached.mp4)](https://github.com/AlMov-1/sms-rate-gatekeeper-ui/blob/master/assets/videos/SmsRateGatekeeperUi%20-%20threshold%20is%20reached.mp4)

## Setup
* Chekout both
  *   https://github.com/AlMov-1/SMSRateGatekeeper
  *   https://github.com/AlMov-1/sms-rate-gatekeeper-ui
*   Launch SMSRateGatekeeper
*   Launch sms-rate-gatekeeper-ui
*   Start posting message to the SMSRateGatekeeper POST Endpont using SWAGGER or Postman or anything else suitable.
*   You should see notifications are being listed in the table of the UI page.

## ==========================
## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
