/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.render('create-qr', {
    title: 'Create QR'
  });
};
