import React, { Component } from "react";
import BookTable from "./BookTable";
import SearchBar from "./SearchBar";

class BookList extends Component {
  state = {
    filteredBooks: this.props.books
  };
  filterBooks = query => {
    query = query.toLowerCase();
    let filteredBooks = this.props.books.filter(book =>
      `${book.title}`.toLowerCase().includes(query)
    );
    this.setState({ filteredBooks: filteredBooks });
  };

  filterColor = color => {
    return this.props.books.filter(book => book.color === color);
    // this.setState({ filteredBooks: filteredcolors });
  };

  render() {
    const color = this.props.match.params.color;
    let m = this.state.filteredBooks;
    if (color) {
      {
        m = this.filterColor(color);
        // return m;
        console.log(this.filterColor(color));
      }
    }
    return (
      <div>
        <h3>Books</h3>
        <SearchBar onChange={this.filterBooks} />
        <BookTable books={m} />
      </div>
    );
  }
}
export default BookList;
