import { Component } from'react';

class Blogs extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: []
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => this.setState({ blogs: data }))
  }

  render() {
    return (
      <div>
        <h1>Blogs</h1>
        <p>Ini adalah halaman Blogs</p>
        <table>
          <thead>
            <tr>
              <th>No</th>
              <th>Title</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {this.state.blogs.map((blog, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{blog.title}</td>
                <td>{blog.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Blogs;