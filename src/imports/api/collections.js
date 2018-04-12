import { Mongo } from 'meteor/mongo'

export const Notes = new Mongo.Collection('notes')
export const Items = new Mongo.Collection('items')
export const Students = new Mongo.Collection('students')
export const Courses = new Mongo.Collection('courses')