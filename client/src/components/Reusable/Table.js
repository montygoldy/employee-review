import React from "react";

const Table = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Job Title</th>
            <th>Twitter</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td data-column="First Name">James</td>
            <td data-column="Last Name">Matman</td>
            <td data-column="Job Title">Chief Sandwich Eater</td>
            <td data-column="Twitter">@james</td>
            <td className="actions">
              <button>
                <i class="fas fa-pencil-alt" />
              </button>
              <button>
                <i class="fas fa-trash-alt" />
              </button>
            </td>
          </tr>
          <tr>
            <td data-column="First Name">Andor</td>
            <td data-column="Last Name">Nagy</td>
            <td data-column="Job Title">Designer</td>
            <td data-column="Twitter">@andornagy</td>
            <td className="actions">
              <button>
                <i class="fas fa-pencil-alt" />
              </button>
              <button>
                <i class="fas fa-trash-alt" />
              </button>
            </td>
          </tr>
          <tr>
            <td data-column="First Name">Tamas</td>
            <td data-column="Last Name">Biro</td>
            <td data-column="Job Title">Game Tester</td>
            <td data-column="Twitter">@tamas</td>
            <td className="actions">
              <button>
                <i class="fas fa-pencil-alt" />
              </button>
              <button>
                <i class="fas fa-trash-alt" />
              </button>
            </td>
          </tr>
          <tr>
            <td data-column="First Name">Zoli</td>
            <td data-column="Last Name">Mastah</td>
            <td data-column="Job Title">Developer</td>
            <td data-column="Twitter">@zoli</td>
            <td className="actions">
              <button>
                <i class="fas fa-pencil-alt" />
              </button>
              <button>
                <i class="fas fa-trash-alt" />
              </button>
            </td>
          </tr>
          <tr>
            <td data-column="First Name">Szabi</td>
            <td data-column="Last Name">Nagy</td>
            <td data-column="Job Title">Chief Sandwich Eater</td>
            <td data-column="Twitter">@szabi</td>
            <td className="actions">
              <button>
                <i class="fas fa-pencil-alt" />
              </button>
              <button>
                <i class="fas fa-trash-alt" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
