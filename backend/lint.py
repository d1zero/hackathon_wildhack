from pylint import epylint as lint
import os

files = os.listdir('./')

for file in files:
    if os.path.isdir(file) and os.path.basename(file) != 'env' and os.path.basename(file) != 'venv':
        lint.py_run(file)
