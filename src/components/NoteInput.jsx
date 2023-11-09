import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            body: '',
        }

        this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
        this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
    }

    onTitleChangeEventHandler(event) {
        const newTitle = event.target.value;
        if (newTitle.length <= 50) {
            this.setState({
                title: newTitle,
            });
        }
    }

    onBodyChangeEventHandler(event) {
        this.setState({
            body: event.target.value,
        });
    }

    onSubmitEventHandler(event) {
        event.preventDefault();
        this.props.addNote(this.state);
    }

    render() {
        const remainingChars = 50 - this.state.title.length;
        return (
            <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                <input
                    type="text"
                    placeholder="Judul"
                    value={this.state.title}
                    onChange={this.onTitleChangeEventHandler}
                />
                <p>Karakter tersisa: {remainingChars}</p>
                <input
                    type="text"
                    placeholder="Isi Catatan"
                    value={this.state.body}
                    onChange={this.onBodyChangeEventHandler}
                />
                <button type="submit">Tambah</button>
            </form>
        )
    }
}

export default NoteInput;
