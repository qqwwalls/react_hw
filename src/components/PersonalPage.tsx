import { Component } from 'react';

type PersonalPageProps = {
  name: string;
  phone: string;
  email: string;
  city: string;
  experience: string;
  skills: string[];
  photo: string;
};

class PersonalPage extends Component<PersonalPageProps> {
  render() {
    const { name, phone, email, city, experience, skills, photo } = this.props;
    
    return (
      <div className="personal-page" style={{ border: '1px solid #ddd', padding: '24px', borderRadius: '12px', maxWidth: '450px', backgroundColor: '#fff', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '20px', marginBottom: '20px' }}>
          <img src={photo} alt={name} style={{ width: '120px', height: '120px', borderRadius: '50%', objectFit: 'cover', border: '3px solid #eee' }} />
          <div>
            <h2 style={{ margin: '0 0 8px 0', color: '#333' }}>{name}</h2>
            <p style={{ margin: '0', color: '#666' }}>📍 {city}</p>
          </div>
        </div>
        
        <div style={{ color: '#444', lineHeight: '1.6' }}>
          <p><strong>📞 Телефон:</strong> {phone}</p>
          <p><strong>✉️ Email:</strong> {email}</p>
          
          <div style={{ margin: '16px 0' }}>
            <strong>💼 Досвід роботи:</strong>
            <p style={{ margin: '4px 0 0 0', paddingLeft: '12px', borderLeft: '3px solid #ccc' }}>{experience}</p>
          </div>
          
          <div>
            <strong>🛠 Навички:</strong>
            <ul style={{ paddingLeft: '20px', margin: '8px 0 0 0' }}>
              {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default PersonalPage;
