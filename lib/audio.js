var audio_clips = {};

function clone_audio(audio) {
    var clone = new Audio(audio.src);
    clone.load();
    return clone;
}

function load_audio(name, file, callback) {
    if (!file) file = name;
    if (!(name in audio_clips)) {
        audio_clips[name] = new Audio('audio/' + file);
        audio_clips[name].load();
    }
    audio_clips[name].clone = function () {
        return clone_audio(this);
    };
    if (callback) callback(audio_clips[name]);
    return audio_clips[name];
}