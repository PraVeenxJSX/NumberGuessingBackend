router.get('/users', async (req, res) => {
    try {
      const users = await User.find({}, 'username');
      console.log("Fetched users:", users); // Debug log
      res.json(users);
    } catch (err) {
      console.error("Error fetching users:", err); // Log error details
      res.status(500).json({ message: 'Error fetching users' });
    }
  });
  