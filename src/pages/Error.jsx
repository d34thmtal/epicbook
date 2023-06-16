import React from 'react'

export default function Error() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 offset-md-3 text-center">
                    <h1 className="display-4">Oops!</h1>
                    <h2 className="mb-4">Pagina non trovata</h2>
                    <p>La pagina che stai cercando potrebbe essere stata rimossa, rinominata o non essere al momento disponibile.</p>
                    <p>Torna alla <a href="/">pagina iniziale</a> per scoprire tutti i nostri titoli.</p>
                </div>
            </div>
        </div>
    );
};

