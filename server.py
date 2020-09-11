from flask import Flask
from flask import render_template, session, redirect, escape, request, url_for
from flask_login import logout_user, LoginManager
from flask_pymongo import PyMongo
import bcrypt


app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'educaweb'
app.config['MONGO_URI'] = 'mongodb+srv://alberto:alberto2019@cluster0.iklun.gcp.mongodb.net/educaweb?retryWrites=true&w=majority'

mongo = PyMongo(app)

@app.route('/')
def index():
    if 'username' in session:
        return render_template('index.html', name=session['username'])
    else:
        return render_template('login.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/resultado/<puntos>')
def resultado(puntos):
    return render_template('results.html', puntos=puntos, table = list(mongo.db.scores.find()))


@app.route('/juego/<dificultad>/<nivel>/<puntos>')
def juego(dificultad, nivel, puntos):
    return render_template('juego.html', dificultad=dificultad, nivel=nivel, puntos=puntos)


@app.route('/login', methods= ['POST'])
def logueo():
    users = mongo.db.users
    login_user = users.find_one({'name': request.form['username']})
    #print(login_user)
    if login_user:
        if bcrypt.hashpw(request.form['password'].encode('utf-8'), login_user['password'].encode('utf-8')) == login_user['password'].encode('utf-8'):
            session['username'] = request.form['username']
            return redirect(url_for('index'))
    return 'Invalid username or password'

app.secret_key = 'mysecret'

@app.route('/save', methods = ['POST'])
def guardar_puntos():
    score = request.get_json()
    print(score)
    mongo.db.scores.insert_one({'score': score['score'], 'user': session['username']})

    return render_template('results.html', score=score, table = list(mongo.db.scores.find()))



if __name__ == '__main__':
    app.run('127.0.0.1', 4000, debug=True)
    #app.run(debug=True)