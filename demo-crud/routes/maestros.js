const express = require('express');
const router = express.Router();

const mysqlConnection = require('../configurations/db-conf');

/*---------------------------------------Maestros----------------------------------------*/
/*Get-Maestros*/
router.get('/maestros',(req,res)=>{
    console.log('get lista maestros')
    mysqlConnection.query('select d.id, d.id_persona, d.fecha_ingreso, p.nombre, p.apellido, p.fecha_nacimiento, p.Direccion from oexk6sn6x2lc0kha.docente d join oexk6sn6x2lc0kha.persona p on d.id_persona=p.id;',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*Get-id-Maestros*/
router.get('/maestros/:id',(req,res)=>{
    console.log('get maestro')
    mysqlConnection.query('select d.id, d.id_persona, d.fecha_ingreso, p.nombre, p.apellido, p.fecha_nacimiento, p.Direccion from oexk6sn6x2lc0kha.docente d join oexk6sn6x2lc0kha.persona p on d.id_persona=p.id where d.id = ?;',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*Insert-Maestros*/
router.post('/maestros',(req,res)=>{
    console.log('Insert maestros')
    let emp=req.body;
    console.log(emp);
    mysqlConnection.query('insert into docente (id_persona, fecha_ingreso) values (?,?)',
    [emp.IdPersona,emp.FechaIngreso],(err,result)=>{
        if(!err){
            console.log(result);
            res.status(201).send('created Successfully');
        }else{
            console.log(err);
            res.send('Error'+err);
        }
    })
});

/*Update-Maestros*/
router.put('/maestros/:id',(req,res)=>{
    console.log('Update maestros')
    let emp=req.body;
    mysqlConnection.query('update docente set id_persona=?, fecha_ingreso=? where id=?',
    [emp.IdPersona,emp.FechaIngreso,req.params.id],(err,result)=>{
        if(!err){
            console.log(result);
            res.status(202).send('Updated Successfully');
        }else{
            console.log(err);
            res.send('Error'+err);
        }
    })
});

/*Delete-Maestros*/
router.delete('/maestros/:id',(req,res)=>{
    console.log('Delete maestro')
    mysqlConnection.query('delete from docente where id = ?',[req.params.id],(err,result)=>{
        if(!err){
            console.log(result);
            res.status(202).send('Deleted Successfully');
        }else{
            console.log(err);
            res.send('Error'+err);
        }
    })
});

module.exports = router;