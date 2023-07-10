const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User", 
    },
    title: {
        type: 'string',
        required: [true, "Add the Title!"]
    },
    subtitle: {
        type: 'string',
        required: [true, "Add the new Subtitle!"],
    },
    paragraph1: {
        type: 'string',
        required: [true, "Add the new Paragraph 1!"],
    },
    paragraph2: {
        type: 'string',
        required: [true, "Add the new Paragraph 2!"],
    },
    paragraph3: {
        type: 'string',
        required: [true, "Add the new Paragraph 3!"],
    }
}, {
    timestamps: true
});

module.exports = mongoose.model("News", newsSchema);
