-- No. 1
USE purwadhika_branch;
CREATE TABLE Branchs (
    id INT AUTO_INCREMENT PRIMARY KEY,
    branch_name VARCHAR(3),
    pic VARCHAR(255),
    address VARCHAR(255),
    city VARCHAR(255),
    province VARCHAR(255)
);

INSERT INTO Branchs (branch_name, pic, address, city, province) 
VALUES ('BSD', 'THOMAS', 'GREEN OFFICE PARK 9', 'BSD', 'TANGERANG'),
        ('JKT', 'BUDI', 'MSIG TOWER', 'JAKARTA SELATAN', 'JAKARTA'),
        ('BTM', 'ANGEL', 'NONGSA', 'BATAM', 'KEP. RIAU');


-- No. 2
UPDATE Branchs 
SET pic = 'Dono' 
WHERE city = 'BSD'
LIMIT 1;


-- No. 3
INSERT INTO Branchs (branch_name, pic, address, city, province) 
VALUE ('BLI', 'TONO', 'GIANYAR', 'GIANYAR', 'BALI')