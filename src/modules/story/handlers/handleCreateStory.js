const createStory = require("../domain/createStory");
const Story = require('../dbSchema')

/**
 * 
 * @param {*} req 
 * @param {*} res 
 * 
 */

const handleCreateStory = async (req, res) => {


  const storyOrError = createStory(req.body)
  if (storyOrError.tag == 'failed') {
    res.status(400).json({
      data: null,
      error: {
        code: "VALIDATION",
        message: storyOrError.message
      }
    });

    return;
  }

  const story = await Story.create(storyOrError.data);
  console.log(story);

  if (!story) {
    res.status(500).json({
      data: null,
      error: {
        code: "INTERNAL_SERVER_ERROR",
        message: "Oops! an error occured, please try again later"
      }
    });
    return;
  }
  res.status(201).json({
    data: story,
    error: {
      code: null,
      message: null
    }
  });
}

module.exports = handleCreateStory;
