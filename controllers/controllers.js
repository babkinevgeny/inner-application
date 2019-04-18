const client = require('../util/database')

exports.getIndex = (req, res, next) => {
    res.render('index');
}

exports.getLogin = (req, res, next) => {
    res.render('page-login');
}

exports.getBlank = (req, res, next) => {
    client.query('SELECT * FROM contractors', (err, data) => {
        res.render('blank-page', {
            contractors: data.rows
        });
    });
}

exports.postContractor = (req, res, next) => {
    const data = req.body;
    const textQuery = 'INSERT INTO contractors (quarantine, priority, orgform, title, city, site, address, access, phones, name, email, comment, specialization) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13)';
    const values = [data.quarantine, data.priority, data.orgform, data.title, data.city, data.site, data.address, data.access, data.phones, data.manager, data.email, data.comment, data.specialization];
    client.query(textQuery, values, (err, res) => {
        if (err) {
            console.log(err.stack)
        }
    });
    res.redirect('/blank-page');
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

