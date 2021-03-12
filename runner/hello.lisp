(defun hello () 
    (let (n (read))
    (loop for i from 1 to n 
        (print("hello world!"))
    )
)