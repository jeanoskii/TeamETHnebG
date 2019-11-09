/**
 * GET /
 * Home page.
 */
exports.getCreateQr = (req, res) => {
  const unknownUser = !(req.user);

  res.render('create-qr', {
    title: 'Create QR',
    unknownUser,
  });
};
