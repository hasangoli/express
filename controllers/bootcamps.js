/**
 * @description     Get all bootcamps
 * @route           GET /api/v1/bootcamps
 * @access          Public
 */
exports.getBootcamps = (_, res) => {
  res.status(200).json({
    success: true,
    data: {
      msg: 'Show all bootcamps',
    },
  });
};

/**
 * @description     Get a bootcamp
 * @route           GET /api/v1/bootcamps/:id
 * @access          Public
 */
exports.getBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      msg: `Show bootcamp ${req.params.id}`,
    },
  });
};

/**
 * @description     Create a bootcamp
 * @route           POST /api/v1/bootcamps
 * @access          Private
 */
exports.createBootcamp = (_, res) => {
  res.status(200).json({
    success: true,
    data: {
      msg: 'Create new bootcamp',
    },
  });
};

/**
 * @description     Update a bootcamp
 * @route           PUT /api/v1/bootcamps/:id
 * @access          Private
 */
exports.updateBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      msg: `Update bootcamp ${req.params.id}`,
    },
  });
};

/**
 * @description     Delete a bootcamp
 * @route           DELETE /api/v1/bootcamps/:id
 * @access          Private
 */
exports.deleteBootcamp = (req, res) => {
  res.status(200).json({
    success: true,
    data: {
      msg: `Delete bootcamp ${req.params.id}`,
    },
  });
};
