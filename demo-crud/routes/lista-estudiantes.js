const express = require('express');
const router = express.Router();

const mysqlConnection = require('../configurations/db-conf');

/*-----------------------------------------/---------------------------------------*/
/*retorna los datos del estudiante*/
router.get('/',(req,res)=>{
    console.log('retornar datos de los estudiante')
    mysqlConnection.query('select e.id, p.nombre, e.carnet from oexk6sn6x2lc0kha.estudiante e join oexk6sn6x2lc0kha.persona p on e.id_persona=p.id;',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});

module.exports = router;