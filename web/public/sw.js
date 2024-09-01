self.addEventListener('push', event => {
    // TODO
    let data = event.data.json();
    const image = 'https://etut-web.home.mbizcard.in/images/logo/logo_64.png';
    const options = {
        body: data.options.body,
        icon: image
    }
    self.registration.showNotification(
        data.title,
        options
    );
});

self.addEventListener('notificationclick', event => {
    // TODO
    console.log(event);
    event.notification.close();
    // event.waitUntil(self.clients.openWindow('https://web.dev'))
});
