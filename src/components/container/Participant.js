import React from 'react';
const headers = ['Name', 'E-mail address', 'Phone number'];

export const Participant = ({participants, id}) => {
  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            {headers.map((header) => <th key={header}>{header}</th>)}
          </tr>
        </thead>
        <tbody>
          {
            participants.map(participant => {
              return (
                <tr key={participant.id}>
                  <td>{participant.full_name}</td>
                  <td>{participant.email}</td>
                  <td>{participant.phone}</td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  )

}
