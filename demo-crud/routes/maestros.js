const express = require('express');
const router = express.Router();

const mysqlConnection = require('../configurations/db-conf');

/*---------------------------------------Docentes----------------------------------------*/
/*Get-Docentes*/
router.get('/docentes',(req,res)=>{
    console.log('get lista docentes')
    mysqlConnection.query('select d.id, d.id_persona, d.fecha_ingreso, p.nombre, p.apellido, p.fecha_nacimiento, p.Direccion from oexk6sn6x2lc0kha.docente d join oexk6sn6x2lc0kha.persona p on d.id_persona=p.id;',(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*Get-id-Docentes*/
router.get('/docentes/:id',(req,res)=>{
    console.log('get docentes')
    mysqlConnection.query('select d.id, d.id_persona, d.fecha_ingreso, p.nombre, p.apellido, p.fecha_nacimiento, p.Direccion from oexk6sn6x2lc0kha.docente d join oexk6sn6x2lc0kha.persona p on d.id_persona=p.id where d.id = ?;',[req.params.id],(err,rows,fields)=>{
        if(!err){
            res.send(rows);
        }else{
            console.log(err);
            res.send('Error');
        }
    })
});
/*Insert-Docentes*/
router.post('/docentes',(req,res)=>{
    console.log('Insert docentes')
    let emp=req.body;
    console.log(emp);
    mysqlConnection.query('insert into docente (id_persona, fecha_ingreso) values (?,?)',
    [emp.id_persona,emp.fecha_ingreso],(err,result)=>{
        if(!err){
            console.log(result);
            res.status(201).send('created Successfully');
        }else{
            console.log(err);
            res.send('Error'+err);
        }
    })
});

/*Update-Docentes*/
router.put('/docentes/:id',(req,res)=>{
    console.log('Update docentes')
    let emp=req.body;
    mysqlConnection.query('update docente set id_persona=?, fecha_ingreso=? where id=?',
    [emp.id_persona,emp.fecha_ingreso,req.params.id],(err,result)=>{
        if(!err){
            console.log(result);
            res.status(202).send('Updated Successfully');
        }else{
            console.log(err);
            res.send('Error'+err);
        }
    })
});

/*Delete-Docentes*/
router.delete('/docentes/:id',(req,res)=>{
    console.log('Delete docentes')
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