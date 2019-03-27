const express = require('express');

const controllers = require('../controllers/controllers');

const router = express.Router();

router.get('/', controllers.getIndex);
router.get('/login', controllers.getLogin);
router.get('/blank-page', controllers.getBlank);
router.get('/page-calendar', controllers.getCalendar);
router.get('/page-error', controllers.getError);
router.get('/page-invoice', controllers.getInvoice);
router.get('/page-lockscreen', controllers.getLockscreen);
router.get('/page-mailbox', controllers.getMailbox);
router.get('/page-user', controllers.getUser);
router.get('/table-basic', controllers.getTableBasic);
router.get('/table-data-table', controllers.getDataTable);


router.get('/form-components', controllers.getFormComponents);
router.get('/form-custom', controllers.getFormCustom);
router.get('/form-notifications', controllers.getFormNotifications);
router.get('/form-samples', controllers.getFormSamples);

router.get('/charts', controllers.getCharts);

router.get('/bootstrap-components', controllers.getBootstrapComponents);
router.get('/ui-cards', controllers.getCards);
router.get('/widgets', controllers.getWidgets);


module.exports = router;
