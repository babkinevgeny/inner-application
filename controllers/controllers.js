exports.getIndex = (req, res, next) => {
    res.render('index');
}

exports.getLogin = (req, res, next) => {
    res.render('page-login');
}

exports.getBlank = (req, res, next) => {
    res.render('blank-page');
}

exports.getCalendar = (req, res, next) => {
    res.render('page-calendar');
}

exports.getError = (req, res, next) => {
    res.render('page-error');
}

exports.getInvoice = (req, res, next) => {
    res.render('page-invoice');
}

exports.getLockscreen = (req, res, next) => {
    res.render('page-lockscreen');
}

exports.getMailbox = (req, res, next) => {
    res.render('page-mailbox');
}

exports.getUser = (req, res, next) => {
    res.render('page-user');
}

exports.getTableBasic = (req, res, next) => {
    res.render('table-basic');
}

exports.getDataTable = (req, res, next) => {
    res.render('table-data-table');
}

exports.getFormComponents = (req, res, next) => {
    res.render('form-components');
}

exports.getFormCustom = (req, res, next) => {
    res.render('form-custom');
}

exports.getFormNotifications = (req, res, next) => {
    res.render('form-notifications');
}

exports.getFormSamples = (req, res, next) => {
    res.render('form-samples');
}

exports.getCharts = (req, res, next) => {
    res.render('charts');
}

exports.getBootstrapComponents = (req, res, next) => {
    res.render('bootstrap-components');
}

exports.getCards = (req, res, next) => {
    res.render('ui-cards');
}

exports.getWidgets = (req, res, next) => {
    res.render('widgets');
}

