from django.db import models

# Create your models here.
class BaseModel(models.Model):
    img = models.CharField(max_length=100)
    name = models.CharField(max_length=100)
    trackid = models.CharField(max_length=10)

    class Meta:
        abstract = True

# 轮播图　模型类
# insert into axf_wheel(img,name,trackid)
class Bigwheel(BaseModel): #大
    class Meta:
        db_table = 'bigwheel'

class Smallwheel(BaseModel):
    class Meta:
        db_table = 'smallwheel'