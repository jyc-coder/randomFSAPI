const express = require('express');
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('data.json', 'utf-8'));

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    const { author, message } = req.query 
    
    console.log(author, message)
    
    let _data = data

    
    console.log(_data)
    res.json(_data.filter(value => author ? value.author.includes(author) : true)
    .filter((value) =>message ?  value.message.includes(message) : true)
    );
    

});

app.get('/random', (req, res) => {
    const rand = Math.floor((Math.random() * data.length))
  res.json(data[rand]);
});


app.get('/:id', (req, res) => {
    const id = req.params.id;
       if (isNaN(id)) {
         res.json({
           re: false,
           msg: 'id값이 숫자가 아니에요!',
         });
         return;
       }
       const num = parseInt(id);
       if (num >= data.length || num < 0) {
         res.json({
           re: false,
           msg: '유효한 id값이 아니에요!',
         });
         return;
       } 

  res.json(data[num]);
});


app.post('/', (req, res) => {
  console.log(req.body);
  const {author, message} = req.body;
  if (!(author && author.length > 0 && message && message.length > 0)) {
    res.json({
      rs:false,
    });
    }
  else {
       res.json({
         rs: true,
       });
    }
  data.push({
    author: req.body.author,
    message: req.body.message,
  });
 
});
app.delete('/:id', (req, res) => {
    const id = req.params.id
    
    if (isNaN(id)) {
        res.json({
            re: false,
            msg: 'id값이 숫자가 아니에요!'
        });
        return
    }
    const num = parseInt(id)
    if (num >= data.length || num < 0) {
         res.json({
           re: false,
           msg: '유효한 id값이 아니에요!',
         });
         return;
    } 

    data.splice(num,1)
    res.json({
        re:true
    })
});
app.put('/:id', (req, res) => {
    console.log(req.body);
      const id = req.params.id;

      if (isNaN(id)) {
        res.json({
          re: false,
          msg: 'id값이 숫자가 아니에요!',
        });
        return;
      }
      const num = parseInt(id);
      if (num >= data.length || num < 0) {
        res.json({
          re: false,
          msg: '유효한 id값이 아니에요!',
        });
        return;
      } 
    const { author, message } = req.body;
    
  if (!(author && author.length > 0 && message && message.length > 0)) {
    res.json({
      rs: false,
    });
  } else {
    res.json({
      rs: true,
    });
    }
    
    data[num] = {
        author: req.body.author,
        message: req.body.message,
    };
 
});

app.listen(3000, () => {
  console.log('서버 시작');
});
