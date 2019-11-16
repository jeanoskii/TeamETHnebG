const validator = require('validator');
const nodemailer = require('nodemailer');
const qrCode = require('qrcode');

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

  //let canvas = req.body.canvas;
  
  qrCode.toString('I am a pony!',{type:'terminal'}, function (err, url) {
    console.log(url)
  }); 
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
    })
     
};*/
