export default function TestPage() {
    return (
        <div>
            <h1>Page Test</h1>
            <p>Ceci est votre page de test</p>

            <iframe
                width="80%"
                height="100"
                style={{ border: 0, overflow: 'hidden' }}
                allow="autoplay"
                src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/soundcloud%253Atracks%253A2016881611&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>


        </div>
    );
}
