const validator = require('validator');
const nodemailer = require('nodemailer');
const qrCode = require('qrcode');
const fs = require('fs');

/**
 * GET /view-qr
 * View QR page.
 */
exports.getViewQr = (req, res) => {
  const unknownUser = !(req.user);

  res.render('view-qr', {
    title: 'View QR',
    unknownUser,
  });
  qrCode.toCanvas('sample text', function (err, canvas) {
    if (err) throw err
    var container = res.body.container;
    container.appendChild(canvas)
  });

/*  run().catch(error => console.error(error.stack));

  async function run() {
    const res = await qrCode.toDataURL('http://asyncawait.net');

    fs.writeFileSync('./qr.html', `<img src="${res}">`);
    console.log('Wrote to ./qr.html');
  }
  */
  //let canvas = res.body.canvas;

  qrCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
    console.log(url)
  });
/*
  qrCode.toDataURL('I am a pony!', function (err, url) {
    console.log(url)
  });
  */
};


/**
 * POST /view-qr
 * Send a contact form via Nodemailer.
 */

 /**
  exports.postViewQr = (req, res) => {
    let canvas;
    canvas = req.body.canvas;
  
    qrCode.toCanvas(canvas, 'sample text', function (error) {
      if (error) console.error(error)
      console.log('success!');
    });
    return res.redirect("/view-qr");
     
}; */
