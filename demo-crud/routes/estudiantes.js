const express = require('express');
const router = express.Router();

const mysqlConnection = require('../configurations/db-conf');

/*---------------------------------------Estudiantes----------------------------------------*/
/*Get-Estudiantes*/
router.get('/estudiantes',(req,res)=>{
    console.log('get lista estudiantes')
    mysqlConnection.query('select e.id, e.id_persona, e.fecha_ingreso, e.carnet, p.nombre, p.apellido, p.fecha_nacimiento, p.Direccion, e.status from oexk6sn6x2lc0kha.estudiante e join oexk6sn6x2lc0kha.persona p on e.id_persona=p.id;',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*Get-id-Estudiante*/
router.get('/estudiantes/:id',(req,res)=>{
    console.log('get estudiante')
    mysqlConnection.query('select e.id, e.id_persona, e.fecha_ingreso, e.carnet, p.nombre, p.apellido, p.fecha_nacimiento, p.Direccion, e.status from oexk6sn6x2lc0kha.estudiante e join oexk6sn6x2lc0kha.persona p on e.id_persona=p.id where e.id = ?;',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*Insert-Estudiante*/
router.post('/estudiantes',(req,res)=>{
    console.log('Insert estudiantes')
    let emp=req.body;
    console.log(emp);
    mysqlConnection.query('insert into estudiante (id_persona, fecha_ingreso, carnet) values (?,?,?)',
    [emp.id_persona,emp.fecha_ingreso,emp.carnet],(err,result)=>{
        if(!err){
            console.log(result);
            res.status(201).send('created Successfully');
        }else{
            console.log(err);
            res.send('Error'+err);
        }
    })
});

/*Update-Estudiante*/
router.put('/estudiantes/:id',(req,res)=>{
    console.log('Update estudiantes')
    let emp=req.body;
    mysqlConnection.query('update estudiante set id_persona=?, fecha_ingreso=?, carnet=? where id=?',
    [emp.id_persona,emp.fecha_ingreso,emp.carnet,req.params.id],(err,result)=>{
        if(!err){
            console.log(result);
            res.status(202).send('Updated Successfully');
        }else{
            console.log(err);
            res.send('Error'+err);
        }
    })
});

/*Delete-Estudiante*/
router.delete('/estudiantes/:id',(req,res)=>{
    console.log('Delete estudiante')
    mysqlConnection.query('delete from estudiante where id = ?',[req.params.id],(err,result)=>{
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