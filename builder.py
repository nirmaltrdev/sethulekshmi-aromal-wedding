import os, sys, base64

def write_file(rel_path, b64_content):
    abs_path = os.path.join(os.getcwd(), rel_path)
    os.makedirs(os.path.dirname(abs_path), exist_ok=True)
    with open(abs_path, 'wb') as f:
        f.write(base64.b64decode(b64_content))
    print(f'Written: {rel_path} ({os.path.getsize(abs_path)} bytes)')

if __name__ == '__main__':
    filename = sys.argv[1]
    data = sys.argv[2]
    write_file(filename, data)
