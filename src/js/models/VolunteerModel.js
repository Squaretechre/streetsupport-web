/* global location, history */

var ko = require('knockout')
require('knockout.validation') // No variable here is deliberate!

var apiRoutes = require('../api')
var postApi = require('../post-api-data')
var browser = require('../browser')

var formId = 'js-form'
var failId = 'js-fail'
var successId = 'js-success'
var theForm = document.getElementById(formId)
var theFail = document.getElementById(failId)
var theSuccess = document.getElementById(successId)
var hideClass = 'hide'

var VolunteerModel = function () {
  var self = this

  ko.validation.init({
    insertMessages: true,
    decorateInputElement: true,
    parseInputAttributes: true,
    errorMessageClass: 'form__error',
    errorElementClass: 'form__input--error'
  }, true)

  self.firstName = ko.observable('').extend({ required: true })
  self.lastName = ko.observable('').extend({ required: true })
  self.email = ko.observable('').extend({ required: true })
  self.telephone = ko.observable('')
  self.postcode = ko.observable('').extend({ required: true })
  self.skillsAndExperience = ko.observable('')
  self.availability = ko.observable('')
  self.resources = ko.observable('')
  self.isOptedIn = ko.observable(false)

  self.submitForm = function () {
    if (self.errors().length === 0) {
      browser.loading()

      var payload = {
        'FirstName': self.firstName(),
        'LastName': self.lastName(),
        'Email': self.email(),
        'Telephone': self.telephone(),
        'Postcode': self.postcode(),
        'SkillsAndExperienceDescription': self.skillsAndExperience(),
        'AvailabilityDescription': self.availability(),
        'ResourcesDescription': self.resources(),
        'IsOptedIn': self.isOptedIn()
      }

      // TODO: Nice notification on success/fail
      postApi.post(apiRoutes.createVolunteerEnquiry, payload).then(function (result) {
        browser.loaded()
        if (result.statusCode.toString().charAt(0) !== '2') {
          theForm.classList.add(hideClass)
          theFail.classList.remove(hideClass)
        } else {
          theForm.classList.add(hideClass)
          theSuccess.classList.remove(hideClass)
        }
      })
    } else {
      self.errors.showAllMessages()

      // Jump to top of form
      var url = location.href
      location.href = '#' + formId
      history.replaceState(null, null, url)
    }
  }

  self.errors = ko.validation.group(self)
}

module.exports = VolunteerModel
