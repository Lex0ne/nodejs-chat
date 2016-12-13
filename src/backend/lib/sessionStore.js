import mongoose from 'mongoose';
import express from 'express';
import connect from 'connect-mongo';
const MongoStore = connect(express);
export default new MongoStore({ mongooseConnection: mongoose.connection });
