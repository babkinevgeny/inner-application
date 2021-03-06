const client = require('../util/database')

exports.getIndex = (req, res, next) => {
    res.render('index');
}

exports.getLogin = (req, res, next) => {
    res.render('page-login');
}

exports.getContractorsPage = (req, res, next) => {
    client.query('SELECT * FROM contractors', (err, data) => {
        res.render('contractors', {
            contractors: data.rows
        });
    });
}

exports.getContractor = (req, res, next) => {
    const id = req.body.id;
    client.query(`SELECT * FROM contractors WHERE id = ${id}`, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json(data.rows)
        }
    });
}

exports.getMachines = (req, res, next) => {
    const id = req.body.id;
    client.query(`SELECT * FROM machines WHERE contractor_id = ${id}`, (err, data) => {
        if (err) {
            console.log(err)
        } else {
            res.json(data.rows)
        }
    });
}



exports.postContractor = (req, res, next) => {
    const data = req.body;
    const contractorQuery = 'INSERT INTO contractors (quarantine, priority, orgform_1, orgform_2, orgform_3, orgform_4, orgform_5, title_1, title_2, title_3, title_4, title_5, city, site_1, site_2, site_3, site_4, site_5, address_1, address_2, address_3, address_4, address_5, access, phone_1, phone_2, phone_3, phone_4, phone_5, manager, email_1, email_2, email_3, email_4, email_5, comment, specialization) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22, $23, $24, $25, $26, $27, $28, $29, $30, $31, $32, $33, $34, $35, $36, $37)';
    const contractorValues = [data.quarantine, data.priority, data.orgform_1, data.orgform_2, data.orgform_3, data.orgform_4, data.orgform_5, data.title_1, data.title_2, data.title_3, data.title_4, data.title_5, data.city, data.site_1, data.site_2, data.site_3, data.site_4, data.site_5, data.address_1, data.address_2, data.address_3, data.address_4, data.address_5, data.access, data.phone_1, data.phone_2, data.phone_3, data.phone_4, data.phone_5, data.manager, data.email_1, data.email_2, data.email_3, data.email_4, data.email_5, data.comment, data.specialization];

    client.query(contractorQuery, contractorValues, (err, res) => {
        if (err) {
            console.log(err.stack)
        }
    });

    const machineQuery = 'INSERT INTO machines (machine_type, machine_quantity, machine_length, machine_width, machine_height, machine_diameter, machine_depth, machine_module, machine_material, machine_loading, machine_comment, contractor_id) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)';
    let id = '';
    client.query('SELECT id FROM contractors ORDER BY ID DESC LIMIT 1')
        .then(res => {
            id = res.rows[0].id;
        })
        .then(() => {
            for (let i = 0; i < data.send_machine.length; i++) {
                client.query(machineQuery, [ data[`machine_type_${data.send_machine[i]}`], data[`machine_quantity_${data.send_machine[i]}`], data[`machine_length_${data.send_machine[i]}`], data[`machine_width_${data.send_machine[i]}`], data[`machine_height_${data.send_machine[i]}`], data[`machine_diameter_${data.send_machine[i]}`], data[`machine_depth_${data.send_machine[i]}`], data[`machine_module_${data.send_machine[i]}`], data[`machine_material_${data.send_machine[i]}`], data[`machine_loading_${data.send_machine[i]}`], data[`machine_comment_${data.send_machine[i]}`], id]);
            }
            
        });

    res.redirect('/contractors');
}

exports.updateContractor = (req, res, next) => {
    const data = req.body;
    const id = Number(data.id);
    delete data.id;
    
    const dataKeys = Object.keys(data);
    const dataValues = Object.values(data);
    
    let setPattern = [];
    dataKeys.forEach((key, i) => {
        setPattern.push(`${key} = '${dataValues[i]}'`)
    });
    const textQuery = `UPDATE contractors SET ${setPattern.join(', ')} WHERE id = ${id}`;
    client.query(textQuery, (err, res) => {
        if (err) {
            console.log(err.stack)
        }
    });
    res.redirect('/contractors');
}

exports.getOrdersPage = (req, res, next) => {
    res.render('orders');
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

