const express = require('express');
const morgan = require('morgan');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash'); 
const mysqlstore = require('express-mysql-session')(session);
const bodyparser = require('body-parser');

const { database } = require('./keys'); 

const app = express(); 
require('./lib/passports');

/// archivos compartidos
app.set('port', process.env.PORT || 4200);
app.set('views', path.join(__dirname, 'vistas'));
app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs',
    helpres: require('./lib/handlebars')
}));
app.set('view engine', '.hbs');
/// archivos compartidos


//midlewars
app.use(morgan('dev')); //renderizar los datos
app.use(bodyparser.urlencoded({
    extended: false
}));
app.use(bodyparser.json());
app.use(session({
    secret: 'MINCONCENTRADE',
    resave: false,
    saveUninitialized: false,
    store: new mysqlstore(database)
}));
app.use(flash());
app.use(passport.initialize());
app.use(passport.session());
//midlewars

//varible globales 
app.use((req, res, next) => {
    app.locals.message = req.flash('message');
    app.locals.success = req.flash('success');
    app.locals.user = req.user;
    next();
});
//varible globales 

//public
app.use(express.static(path.join(__dirname, 'public')));
//public


//routers

app.use(require("./rutas/index.rutas") )
app.use(require("./rutas/registroRutas"))
app.use("/proyecto",require("./rutas/proyecto.rutas"))
app.use(require("./rutas/problemas.rutas"))
app.use("/agenda",require("./rutas/agenda.rutas"))
app.use(require("./rutas/vida.rutas")) 
app.use("/pregunta",require("./rutas/pregunta.rutas"))
app.use("/rol",require("./rutas/rol.rutas"))
app.use("/categoria",require("./rutas/categoria.rutas"))
app.use("/usuario", require("./rutas/usuario.rutas"))
app.use("/consejo", require("./rutas/consejo.rutas"))
app.use(require("./rutas/nosotros.rutas"))
app.use(require("./rutas/actividades.rutas"))
app.use(require("./rutas/apipreguntas.rutas"))
app.use(require("./rutas/gamepreguntas.rutas"))
app.use(require("./rutas/dashboard.rutas"))
app.use(require("./rutas/contacto.rutas"))
module.exports = app;
