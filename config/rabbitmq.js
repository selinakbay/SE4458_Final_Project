const amqp = require('amqplib');

async function setupQueue() {
    const connection = await amqp.connect(process.env.RABBITMQ_URL);
    const channel = await connection.createChannel();
    await channel.assertQueue('appointment_notifications');
    console.log('RabbitMQ Connected');
    return channel;
}

module.exports = setupQueue;
