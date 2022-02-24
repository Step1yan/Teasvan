class DatePickerPage {
    getDatePicker(){
        return cy.get('input#datePickerMonthYearInput')
    }
    getCalendar(){
        return cy.get('.react-datepicker__month-container')
    }
    getNavigateBack(){
    return cy.get('.react-datepicker__navigation--previous')
    }
    getNavigateForward(){
        return cy.get('.react-datepicker__navigation--next')
    }
    getMonthName(){
        return cy.get('.react-datepicker__month-select').find('option:selected')
    }
    getYearName(){
        return cy.get('.react-datepicker__year-select').find('option:selected')
    }
    getCalendarDays(day){
        return cy.get(`.react-datepicker__day--0${day}`)
    }
}
export default DatePickerPage