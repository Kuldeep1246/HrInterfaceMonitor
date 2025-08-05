const mongoose = require('mongoose')

const InterfaceLogSchema = new mongoose.Schema({
    interfaceName:String,
    integrationKey:String,
    status:{type:String,enum:['success','failure']},
    message:String,
    timestamp:{type:Date,default:Date.now}
})
InterfaceLogSchema.index({ timestamp: 1 });
InterfaceLogSchema.index({ status: 1 });
InterfaceLogSchema.index({ interfaceName: 1 });
module.exports = mongoose.model('InterfaceLog',InterfaceLogSchema)
