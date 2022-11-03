import mongoose from 'mongoose'

try {
    await mongoose.connect(process.env.URI_MONGODB)
    console.log('Conection to DB is OK')
} catch (error) {
    console.log('Error to intent conection to DB: ', error)
}

