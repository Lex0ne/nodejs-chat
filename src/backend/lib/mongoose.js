import mongoose from 'mongoose';
import config from '../config/index';

export default mongoose.connect(config.get('mongoose:uri'), config.get('mongoose:options'));
