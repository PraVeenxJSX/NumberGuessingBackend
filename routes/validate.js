router.post('/admin-access', (req, res) => {
  const { key } = req.body;
  if (key === process.env.ADMIN_KEY) {
    return res.json({ success: true });
  }
  res.json({ success: false });
});
