var express = require('express');
var router = express.Router();

/* GET users listing. */
var tablaAutos = [
    {'id': 1, 'modelo': 'Versa', 'marca': 'Nissan '},
    {'id': 2, 'modelo': 'NP300 ', 'marca': 'Nissan'},
    {'id': 3, 'modelo': 'Aveo', 'marca': 'Chevrolet '},
    {'id': 4, 'modelo': 'Vento', 'marca': 'Volkswagen'}
];
router.get('/', function (req, res, next) {
    res.status(200).json(tablaAutos);
});

router.get('/:idAuto', (req, res, next) => {
    var id = req.params.idAuto;
    res.status(200).json(tablaAutos[id - 1]);
});

router.post('/:idAuto', (req, res, next) => {
    res.status(404).json({'error': 'Operación no permitida'});
});

router.post('/', (req, res, next) => {
    console.log(req.body);
    var auto = {
        'id': tablaAutos[tablaAutos.length - 1]['id'] + 1,
        'titulo': req.body.modelo,
        'autor': req.body.marca
    };
    tablaAutos.push(auto);
    res.status(200).json(tablaAutos[tablaAutos.length - 1]);
});

router.patch('/:idAuto', (req, res, next) => {
    var id = req.params.idAuto;
    tablaAutos[id - 1] ['modelo'] = req.body.modelo;
    tablaAutos[id - 1] ['marca'] = req.body.marca;
    res.status(200).json({'mensaje': 'Actualizado'});
});

router.put('/:idAuto', (req, res, next) => {
    var id = req.params.idAuto;
    tablaAutos[id - 1] ['modelo'] = req.body.modelo;
    tablaAutos[id - 1] ['marca'] = req.body.marca;
    res.status(200).json({'mensaje': 'Actualizado'});
});

module.exports = router;