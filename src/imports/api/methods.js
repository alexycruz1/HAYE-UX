import { Meteor } from 'meteor/meteor'
import { SimpleSchema } from 'meteor/aldeed:simple-schema'
import { Notes, Students } from './collections'

Meteor.methods({
  ['notes.add'] (args) {
    new SimpleSchema({
      text: { type: String },
    }).validate(args)

    const { text } = args

    Notes.insert({
      text,
      created: new Date(),
    })
  },

  ['notes.remove'] (args) {
    new SimpleSchema({
      _id:  { type: String },
    }).validate(args)

    const { _id } = args

    Notes.remove(_id)
  },

  ['students.add'] (args) {
    new SimpleSchema({
      name: {type: String},
      age: {type: Number},
      grade: {type: Number},
      courses: {type: Array}
    }).validate(args)

    const {name,age,grade,courses} = args

    Students.insert({
      name,
      age,
      grade,
      courses,
      created: new Date()
    })
  },

  ['students.remove'] (args) {
    new SimpleSchema({
      _id:  { type: String },
    }).validate(args)

    const { _id } = args

    Students.remove(_id)
  },
})
