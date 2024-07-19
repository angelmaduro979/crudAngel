const controllers = {};



controllers.index = (req, res) => {
   
    req.getConnection((err, conn) => {
        if (err) {
            console.log(`this is the error in the Index connection: ${err}`)
            return  res.status(400).json(err)
        } else {

            conn.query('SELECT * FROM crudNodeAngel', (err, results)=>{
                if (err) {
                    console.log(`this is the error in the Index Query: ${err}`)
                    return res.status(500).json(err)
                } else {
                    const message = 'It is working'
                    console.log(results)
                    res.render('index.ejs', {
                        message: message,
                        results:results
                    })
                }
            })
            
        }
    })

}

controllers.indexPost = (req, res) => {

    const {name, email, phone, address}=req.body

    if (!name || !email || !phone || !address) {
        const error = 'All fields are required.';
        console.error(error);
        return res.status(400).json({ error });
    }

    const values = [name, email, phone, address]
    req.getConnection((err, conn) => {
        if (err) {
            console.log(`this is the error in the IndexPost connection: ${err}`)
            return res.status(400).json(err)
        } else {

            conn.query('INSERT INTO crudNodeAngel (name, email, phone, address) VALUES (?, ?, ?, ?)', values,(err, results)=>{
                if (err) {
                    console.log(`this is the error in the IndexPost Query: ${err}`)
                    return  res.status(500).json(err)
                } else {
                    const message = 'It is working'
                    console.log(results)
                    res.redirect('/')
                } 
            })
        }
    })
}

controllers.delete=(req,res)=>{
    const {id}=req.params;
    req.getConnection((err,conn)=>{
        if(err){
            console.log(`this is the error in the delete connection: ${err}`)
            res.status(400).json(err)
        }else{
            console.log(`ID a eliminar: ${id}`);
            conn.query('DELETE FROM crudNodeAngel WHERE id=?', [id] , (err, results)=>{
                if(err){
                    console.log(`this is the error in the delete connection: ${err}`)
                    res.status(500).json(err)
                }else{
                    console.log(results)
                    res.redirect('/')
                }
            })
        }
    })
}

controllers.editContact=(req,res)=>{
    const {id}=req.params;
    req.getConnection((err,conn)=>{
        if(err){
            console.log(`this is the error in the editContact connection: ${err}`);
            res.status(400).json(err); 
        }else{
            conn.query('SELECT * FROM crudNodeAngel WHERE id=?',[id], (err,results)=>{
                if(err){
                    console.log(`this is the error in the editContact query: ${err}`);
                    res.status(500).json(err);
                }else{
                    console.log(`results: ${JSON.stringify(id)}`); // Imprime todos los resultados
                    if (results.length > 0) {
                        res.render('editContact.ejs', {
                            result: results[0]
                        });
                    } else {
                        console.log('No contact found with the provided ID');
                        console.log(`the Id used is ${results.id}`)
                        res.status(404).send('Contact not found');
                    }
                }
            })
        }
    })
}

controllers.editContactPost=(req,res)=>{
    const {name, email, phone, address}=req.body;
    const {id}=req.params;
    const values = [name, email, phone, address, id]


    req.getConnection((err,conn)=>{
        if(err){
            console.log(`this is the error in the editContactPost connection: ${err}`);
            res.status(400).json(err);
        }else{
            conn.query('UPDATE crudNodeAngel SET name=?, email=?, phone=?, address=? WHERE id=?',values,(err,results)=>{
                if(err){
                    console.log(`this is the error in the editContactPost Query: ${err}`);
                    res.status(500).json(err);
                }else{
                    res.redirect('/')
                }
            })
        }
    })
}
module.exports = controllers;